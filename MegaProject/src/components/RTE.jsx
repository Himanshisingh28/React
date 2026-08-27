import React from 'react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <textarea
                        value={value}
                        onChange={onChange}
                        rows={10}
                        className="w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border border-black/10"
                        placeholder="Write your content here..."
                    />
                )}
            />
        </div>
    )
}