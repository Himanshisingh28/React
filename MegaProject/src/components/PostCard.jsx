import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featureImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">

                {/* Image */}
                <div className="w-full h-52 bg-gray-200 flex items-center justify-center">
                    {featureImage ? (
                        <img
                            src={appwriteService.getFilePreview(featureImage)}
                            alt={title}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                        {title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Read more →
                    </p>
                </div>

            </div>
        </Link>
    );
}

export default PostCard;