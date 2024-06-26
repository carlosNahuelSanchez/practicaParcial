const express = require('express');
const {verAlumnos, verAlumnosPorId, borrarAlumno, actualizarAlumno, publicarAlumnos} = require("../controllers/app.controllers")
const router = express.Router();

router.get("/", verAlumnos)

router.get("/:id", verAlumnosPorId)

router.post("/", publicarAlumnos)

router.put("/:id", actualizarAlumno)

router.delete ("/", borrarAlumno)

module.exports = router