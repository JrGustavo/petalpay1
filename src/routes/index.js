import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "First Web Node" });
});

router.get("/", (req, res) => {
    res.render("empresas", { title: "About First Node Website" });
});

router.get("/", (req, res) => {
    res.render("casosdeuso", { title: "Contact Page" });
});

router.get("/", (req, res) => {
    res.render("soluciones", { title: "Contact Page" });
});

router.get("/", (req, res) => {
    res.render("recursos", { title: "Contact Page" });
});

export default router;