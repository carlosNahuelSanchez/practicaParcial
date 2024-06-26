
const verAlumnos = (req,res) => {
    res.json(alumnos)
}

const verAlumnosPorId = (req,res) => {
    id = req.params.id
    res.json(alumnos[id - 1])
}

const publicarAlumnos = (req,res) => {
    const {id, nombre} = req.body
    const data = {
        id : id,
        nombre : nombre
    }
    alumnos.push(data)

    res.send("Alumno enviado")
}

const borrarAlumno = (req,res) => {
    id = req.params.id
    alumnos.splice((id-1), 1)
    res.send("Alumno eliminado")
}

const actualizarAlumno = (req,res) => {
    idAlumno = req.params.id
    const {id, nombre} = req.body
    const data = {
        id : id,
        nombre : nombre
    }
    alumnos.splice((idAlumno-1),1,data)

    res.send("Alumno Actualizado")
}

module.exports = {verAlumnos, verAlumnosPorId, borrarAlumno, actualizarAlumno, publicarAlumnos}