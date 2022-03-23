new PwaManifest({
    name: "Budget Tracker",
    short_name: "",
    icons: [
        {
            src: path.resolve("public/icons/"),
            sizes: [
                96,
                128,
                192,
                256,
                384,
                512
            ],
            destination: path.join("assets",
                "icons")
        }
    ],
    theme_color: "#fffff",
    background_color: "#5D1493",
    start_url: "../index.html",
    display: "standalone"

});
