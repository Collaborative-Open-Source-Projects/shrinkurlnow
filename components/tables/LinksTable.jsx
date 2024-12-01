'use client';

import React from 'react';
import { FaEdit, FaTrash, FaEye, FaRegClone } from 'react-icons/fa'; // FontAwesome icons


export default function LinksTable() {
    const linksData = [
        {
            original: "https://www.example.com/long-url-to-demonstrate-shortening",
            shorten: "https://short.ly/xyz123",
            clicks: 120,
            created: "2024-11-01",
            expires: "2024-12-01",
        },
        {
            original: "https://www.anotherexample.com/a-very-long-url-that-needs-shortening",
            shorten: "https://short.ly/abc456",
            clicks: 85,
            created: "2024-11-05",
            expires: "2024-12-05",
        },
    ];

    return (
        <div className="bg-[rgba(217,217,217,0.4)] backdrop-blur-sm rounded-xl p-4 pt-7 w-[100%] overflow-auto">
            <h2 className="text-xl mb-5 font-semibold">URL Management</h2>

            <table className="min-w-full table-auto">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="px-4 py-2 text-left w-[30%]">Original</th>
                        <th className="px-4 py-2 text-left w-[20%]">Shorten</th>
                        <th className="px-4 py-2 text-left w-[13%]">Clicks</th>
                        <th className="px-4 py-2 text-left w-[13%]">Created</th>
                        <th className="px-4 py-2 text-left w-[13%]">Expires</th>
                        <th className="px-4 py-2 text-left w-[13%]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {linksData.map((link, index) => (
                        <tr key={index} className="border-b border-gray-100">
                            <td className="px-4 py-2">{link.original}</td>
                            <td className="px-4 py-2">{link.shorten}</td>
                            <td className="px-4 py-2">{link.clicks}</td>
                            <td className="px-4 py-2">{link.created}</td>
                            <td className="px-4 py-2">{link.expires}</td>
                            <td className="px-4 py-2 flex gap-1 items-center">
                                <button className=" p-2 rounded-full">
                                    <FaEdit className="h-4 w-4" />
                                </button>

                                {/* Delete Button */}
                                <button className="p-2 rounded-full">
                                    <FaTrash className="h-4 w-4" />
                                </button>

                                {/* View Button */}
                                <button className=" p-2 rounded-full">
                                    <FaEye className="h-4 w-4" />
                                </button>

                                {/* Duplicate Button */}
                                <button className=" p-2 rounded-full">
                                    <FaRegClone className="h-4 w-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
