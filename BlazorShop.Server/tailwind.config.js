//module.exports = {
//    content: ["./Pages/**/*.razor", "./Shared/**/*.razor", "./**/*.cshtml"],
//    theme: {
//        extend: {},
//    },
//    plugins: [],
//};

module.exports = {
    content: ["./**/*.{html,js,mjs,md,cshtml,razor,cs}", "./Components/**/*.{cshtml,razor}", "./Css.cs"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'accent-1': '#FAFAFA',
                'accent-2': '#EAEAEA',
                danger: 'rgb(153 27 27)',
                success: 'rgb(22 101 52)',
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
        },
    },
    plugins: [],
}