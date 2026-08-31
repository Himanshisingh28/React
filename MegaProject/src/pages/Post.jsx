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
        post && userData ? post.userId === userData.$id : false;

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
        <div className="min-h-screen bg-gray-50 py-10">
            <Container>

                {/* Main Post Card */}
                <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Featured Image */}
                    <div className="relative w-full bg-gray-200">

                        {post.featureImage ? (
                            <img
                                src={appwriteService.getFilePreview(
                                    post.featureImage
                                )}
                                alt={post.title}
                                className="w-full h-[400px] object-cover"
                            />
                        ) : (
                            <div className="w-full h-[400px] flex items-center justify-center text-gray-400">
                                No Image Available
                            </div>
                        )}

                        {/* Edit / Delete */}
                        {isAuthor && (
                            <div className="absolute top-5 right-5 flex gap-3">

                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-green-500"
                                        className="hover:bg-green-600 shadow-lg"
                                    >
                                        Edit
                                    </Button>
                                </Link>

                                <Button
                                    bgColor="bg-red-500"
                                    onClick={deletePost}
                                    className="hover:bg-red-600 shadow-lg"
                                >
                                    Delete
                                </Button>

                            </div>
                        )}
                    </div>

                    {/* Post Content */}
                    <div className="p-6 md:p-10">

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {post.title}
                        </h1>

                        {/* Divider */}
                        <div className="border-b border-gray-200 mb-6"></div>

                        {/* Content */}
                        <div className="browser-css text-gray-700 leading-8 text-lg">
                            {parse(post.content)}
                        </div>

                    </div>

                </article>

            </Container>
        </div>
    ) : null;
}