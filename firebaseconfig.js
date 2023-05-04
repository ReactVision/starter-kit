import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  type: "service_account",
  projectId: "techpeoplear",
  private_key_id: "89fb48a83e88cbe325d61c2be6a48f7aacfada86",
  private_key:
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCLZeXO8iz2C3LQ\nYQfMWNsjT8S4Bbf/GGvokP6GJZoF6I/bDE+dGh8Vjua6hf1kLntBhfUlB3Sfp+Ch\nQSAiPOEvFdfzaGrLZjYHxb37kREP4vFrWVoIYP9zib9LYMN8T251fzUqavF8SIdd\nutxHTfr5MJVEMDaXnOjcD0vCXICCJzredSqcCuo6hfFnHkxXFK5yf6mevVHNPq3D\n0Ll95LvGFJSNiTcl7BgictdWDxz2JGl2rlRuVStdvBUYsWlyq70ucvlRcn8duQe8\n01JcoaP7Qy1gboPPEC0gIZtolJRtR2ZEVPOWPLkHisuH/NT65xls96NjAu7ktCuY\npYyVkRfvAgMBAAECggEAA56VX/vjyk5eddCp04F/Ic9BbAch/EAAap0mhAnX56Kz\n5tvOpA/4kfu65p7yBww5671JseNxVhqVd4+/ANnp0uoonaEEHNyTjJIdg7mu4rsM\nH7MbO6/LvOPtEUz65nBoOCl3EkSNQ/fczpnlJv4nBRoLgNDA/3YgibjlSQT+hTfr\nvPUMPl3FyOhRUvb5Sb+wx6fYnkx9kzfu4nqhsZmIuJCdmfbrGNbmBVoh5gp5Zvvn\na1islhfOnwCB9yreYunE7kLI1Gcbawt6/BZ8RPo5jV7LymFaSrRWherkxN6HPIcE\nNWmu4/EfxXDnSICi3vazlBQRXu191oDospQP8ehzAQKBgQC+GUJcsiUdWlbFvtKX\n0Fkpg+8t15c1tX6P1er+6dHXpl8fjEiD3JY3iORauM2FuLXaooS387Npf11QSwjA\nZ/T9f9LYospVcPiqXHfmZBbXwlpPp6YyRdsMFpNVXJvRIYY8pd8r3DJQFYEL2irt\ngoDQRcAStHkiAT9sbJJNfhr/bwKBgQC7uRhYwiDzb8ojysCCa86LsyV6mk0XxhXA\nmBGH/to6HGYMqYSKM9K2yi0QUi4q2ovVTDM/5Ih54uoIGWfWW3olBkZmtZYv3sNe\nfpM7TxJQuKGu9VaidujSRKqah6Oyo4YUPfGMG7mEFxhu4aJCMjVCxHsYevUzPTT6\n0uZi838vgQKBgQCRravEe6SjpOpgagba3oilnvy5BcFUIH0X3xhSN39fIpk9BPVB\nT9cyQc61k2+0rUN3hBnvGmwASeGJuabARCpj5gP/jmk+Ju/5JhmgTk2PFNq+tjxP\nxGbEEbzgqrKiBm3npjmrU/ielIwrOAqzrtHmSb2S2AkIPSqMfXt0tVIdMwKBgEan\nIYy2c+RrnK7f7pinrrNRl7ePP5jFCwbTtTV0K/pXGemGG8ZQPuxhJ5jO9WVXn+2F\nonxXrS4Cw4aM2VIKV+x7ch/SFFasBugXx5444nHTK7dHy3WWP4Z0JanHh0sC1MHl\nlnXfMXGPp7iD36f+caFRheruzD6euMP2gJOZhbMBAoGBALq7ImUQ6ReuaEpU838z\nfCRkzgibnFN25Gd4KICifvkaxfOWx2vGsK7v8JDmIGrJY12tYwJ7pWSLxX1/z9TR\nkwew7Cr7lkybmYREhssIdFRX0SKySLKyQITOSwyJ67t94Z/7nOsCIdMgXG+3iBpf\n7Gk2D+/XACNzepL+suIRWJkl",
  client_email: "firebase-adminsdk-fj2bh@techpeoplear.iam.gserviceaccount.com",
  client_id: "112644020773289024429",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fj2bh%40techpeoplear.iam.gserviceaccount.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
firebaseConfig.db = db;

export default firebaseConfig;
