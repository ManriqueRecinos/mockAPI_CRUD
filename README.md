
# Proyecto de Eventos y Usuarios - API mockAPI

## URL de nuestro proyecto en mockAPI

En nuestro poyecto creamos dos recursos, uno para usuarios y otro para eventos

#### URL de nuestro proyecto en mockAPI
`
https://687035457ca4d06b34b6384e.mockapi.io
`
###
#### Obtener todos los usuarios

```http
  GET /usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Object ID` | **Required**. Id |
| `nombre` | `string` | **Required**. Nombre completo del usuario |
| `date` | `string` | Fecha de nacimiento |
| `Locacion` | `string` | Donde recide |
| `usuario` | `string` | **Required**. Usuario para iniciar sesion |
| `contrasenia` | `string` | **Required**. Contrasenia para inicar sesion |
| `estado` | `string` | **Required**. Para en ves de eliminar, solo deshabilitarlo |

#### Obtener un usuario especifico

```http
  GET /usuarios/:id
```
#### Enviar un usuario

```http
  POST /usuarios
```
#### Actualizar un usuario especifico

```http
  PUT /usuarios/:id
```
#### Eliminar un usuario especifico

```http
  DELETE /usuarios/:id
```

