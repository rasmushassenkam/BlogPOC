export const constants = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/",
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "b0e83d8a96cba99f627a972cf8928641f2ca72f3edb09dafac2d418be6f611ed010d4e7e63c3f286b89ea930cf95fc90c5b3cfd19a2e3ea661f088f2f0fcfdde",
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "5b9b2479dd9aace32a3e173c8a6aa28548cf7b7ece3a16015ae4d25071f46e956eca62a53d175076893550cfdd11c1b17fad511d4c4e1eb175b458152921979b"
}