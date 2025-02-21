/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // Giao thức (https hoặc http)
                hostname: "lh3.googleusercontent.com", // Tên miền bạn muốn cho phép
                port: "", // Cổng (nếu không sử dụng thì để trống)
                pathname: "/**", // Pattern khớp với tất cả đường dẫn con
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "img.icons8.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
