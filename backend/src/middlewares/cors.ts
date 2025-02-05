import cors from "cors";

const corsClient = cors({
  origin: ["http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
});

export { corsClient };
