
alumnos = [
    [
        "Juan",
        [
            ["Matematicas", 8],
            ["Lengua", 9],
            ["Sociales", 7],
            ["Naturales", 7],
        ],
    ],
    [
        "Pablo",
        [
            ["Matematicas", 8],
            ["Lengua", 9],
            ["Sociales", 7],
            ["Naturales", 7],
        ],
    ],
]


def buscar_materia(nombre_materia):
    existe_materia = False
    for alumno in alumnos:
        for materia in alumno[1]:
            if nombre_materia == materia[0]:
               
                nota = int(input("La materia ya existe, ingrese la nota del alumno: "))
                materia[1] = nota
                existe_materia = True
                break

    if not existe_materia:
        anadir_materia(nombre_materia)


def anadir_materia(nombre_materia):
    nota = int(input("Ingrese la nota del alumno: "))
    for alumno in alumnos:
        alumno[1].append([nombre_materia, nota])
    print("Materia agregada:", alumnos)

def alum_filtrado():
    nombre = input("Ingrese el nombre del alumno: ").strip()
    encontrado = False

    for alumno in alumnos:
        if alumno[0].lower() == nombre.lower():
            print("El alumno ya se encuentra registrado")
            nombre_materia = input("Ingrese el nombre de la materia: ").strip()
            buscar_materia(nombre_materia)
            encontrado = True
            break

 
    if not encontrado:
        anadir_alumno(nombre)


def anadir_alumno(nombre):
    nombre_materia = input("Ingrese el nombre de la materia: ").strip()
    nota = int(input("Ingrese la nota del alumno: "))
    materias = [[nombre_materia, nota]]
    alumnos.append([nombre, materias])
    print(alumnos)


    alum_filtrado()
