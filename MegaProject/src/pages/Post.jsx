import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor =
        post && userData
            ? post.userId === userData.$id
            : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featureImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>

                {/* IMAGE SECTION */}
                <div className="w-full h-[440px] flex justify-center items-center mb-4 relative border border-black rounded-xl p-2">

                    {post.featureImage ? (
                        <img
                            src={appwriteService.getFilePreview(
                                post.featureImage
                            )}
                            alt={post.title}
                            className="h-[420px] w-auto object-contain rounded-xl"
                        />
                    ) : (
                        <div className="text-gray-400">
                            No Image
                        </div>
                    )}

                    {/* EDIT & DELETE BUTTONS */}
                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex gap-3">

                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-500"
                                    className="hover:bg-green-600"
                                >
                                    Edit
                                </Button>
                            </Link>

                            <Button
                                bgColor="bg-red-500"
                                className="hover:bg-red-600"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>

                        </div>
                    )}

                </div>

                {/* TITLE */}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post.title}
                    </h1>
                </div>

                {/* CONTENT */}
                <div className="browser-css">
                    {parse(post.content)}
                </div>

            </Container>
        </div>
    ) : null;
}