/** @type {import('tailwindcss').Config} */

import tailwindFormPlugin from "@tailwindcss/forms";

module.exports = {
    content: ["./**/*.{razor,cshtml,html,js,ts,jsx,tsx}",
        "./Components/**/*.{razor,cshtml}",
        "./Shared/**/*.{razor,cshtml}",
        "./Pages/**/*.{razor,cshtml}",
        "./wwwroot/css/**/*.css"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    900: "#4A6DFF",
                    800: "#5C7CFF",
                    700: "#6E8AFF",
                    600: "#8099FF",
                    500: "#92A7FF",
                    400: "#A4B6FF",
                    300: "#B7C5FF",
                    200: "#C9D3FF",
                    100: "#DBE2FF",
                    50: "#E4E9FF",
                },
                secondary: {
                    900: "#111827",
                    800: "#1F2937",
                    700: "#374151",
                    600: "#4B5563",
                    500: "#6B7280",
                    400: "#9CA3AF",
                    300: "#D1D5DB",
                    200: "#E5E7EB",
                    100: "#F3F4F6",
                    50: "#F9FAFB",
                    0: "#FFFFFF",
                },
                success: "#00C073",
                warning: "#FF9900",
                error: "#FF4757",
            },
            fontFamily: {
                Dana: "Dana",
                DanaMedium: "Dana Medium",
                DanaDemiBold: "Dana DemiBold",
                MorabbaLight: "Morabba Light",
                MorabbaMedium: "Morabba Medium",
                MorabbaBold: "Morabba Bold",
                VazirRegular: "Vazir Regular",
                VazirMedium: "Vazir Medium",
                VazirBold: "Vazir Bold",
                VazirBlack: "Vazir Black",
                IRANSansXThin: "IRANSansX",
                IRANSansXUltraLight: "IRANSansX-UltraLight",
                IRANSansXMedium: "IRANSansX-Medium",
                IRANSansXRegular: "IRANSansX-Regular",
                IRANSansXLight: "IRANSansX-Light",
                IRANSansXHeavy: "IRANSansX-Heavy",
                IRANSansXExtraBold: "IRANSansX-ExtraBold",
                IRANSansXExtraBlack: "IRANSansX-ExtraBlack",
                IRANSansXDemiBold: "IRANSansX-DemiBold",
                IRANSansXBold: "IRANSansX-Bold",
                IRANSansXBlack: "IRANSansX-Black;",
            },
            container: {
                center: true,
                padding: "1rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        tailwindFormPlugin({
            strategy: "class",
        }),
    ],
}