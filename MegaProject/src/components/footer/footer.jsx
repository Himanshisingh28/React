import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
    return (
        <footer className="bg-gray-300 border-t-2 border-black">
            <div className="mx-auto max-w-7xl px-4 py-5">

                <div className="flex flex-wrap">

                    {/* Logo & Copyright */}
                    <div className="w-full md:w-1/2 lg:w-5/12 px-3 py-2">
                        <Logo width="80px" />

                        <p className="mt-3 text-xs text-gray-600">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>

                    {/* Company */}
                    <div className="w-1/2 md:w-1/4 lg:w-2/12 px-3 py-2">
                        <h3 className="mb-3 text-xs font-semibold uppercase text-gray-500">
                            Company
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-sm text-gray-800 hover:text-gray-600"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm text-gray-800 hover:text-gray-600"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm text-gray-800 hover:text-gray-600"
                                    to="/"
                                >
                                    Affiliate Program
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-sm text-gray-800 hover:text-gray-600"
                                    to="/"
                                >
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="w-1/2 md:w-1/4 lg:w-2/12 px-3 py-2">
                        <h3 className="mb-3 text-xs font-semibold uppercase text-gray-500">
                            Support
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Account
                                </Link>
                            </li>

                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Help
                                </Link>
                            </li>

                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legals */}
                    <div className="w-1/2 md:w-1/4 lg:w-3/12 px-3 py-2">
                        <h3 className="mb-3 text-xs font-semibold uppercase text-gray-500">
                            Legals
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link className="text-sm text-gray-800 hover:text-gray-600" to="/">
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;