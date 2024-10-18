Nodejs-App1

GET

- get-all-data

- `127.0.0.1:3000/all-data`

- This endpoint makes an HTTP GET request to retrieve all data from the specified resource. The response of this request is documented below as a JSON schema.


```JSON
{
  "id": "id",
  "name": "name",
  "price": "price"
}
```
---
POST

- add-data
- `127.0.0.1:3000/add-data`
- Add Data
  - This endpoint allows you to add data by making an HTTP POST request.

- Request Body
  - The request body should be in JSON format and include the following parameters:
name (string) - The name of the item to be added.
price (string) - The price of the item to be added.
Response
The response will include relevant details based on the request made.

- Headers
Include any relevant headers required for authentication or other purposes.

- Additional Details
Provide any additional relevant details for making the request.

﻿

Body
raw (json)
```json
{
    "name": "Mrs.",
    "price": "319.35"
}
```
---
GET
- get-data-byId

- `127.0.0.1:3000/all-data/{id}`
- This endpoint makes an HTTP GET request to retrieve all data with an ID of {id} from the specified location. Below is the JSON schema for the response:

```JSON
{
  "id": "id",
  "name": "name",
  "price": "price"
}
```
---
DELETE

- delete-data-byId

- `127.0.0.1:3000/delete/{id}`

- Delete Item
This endpoint is used to delete a specific item by its ID.

- Request
Method: DELETE
URL: 127.0.0.1:3000/delete/{id}
Response
The response of this request is a JSON schema describing the structure of the data returned upon successful deletion of the item.

---
PUT

- pdate-data-byId

- `127.0.0.1:3000/update/{id}`

This endpoint allows the client to update a specific resource identified by the provided ID. The HTTP PUT request should be made to 127.0.0.1:3000/update/{id}, with the request body containing the updated name and price of the resource.

- Request Body
  - name (string, required): The new name for the resource.
  - price (string, required): The new price for the resource.
- Response
   - The response of this request is a JSON schema representing the structure of the updated resource. Specific details of the JSON schema will depend on the actual response data returned by the API.

﻿

Body
raw (json)
```json
{
    "name": "Ms.",
    "price": "553.33"
}
```