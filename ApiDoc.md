## Trucks

#### GET /trucks - Get all trucks resource

##### Parameters :

- limit ( required ) : limit how many resource show in one page
- page ( required ) : get resource on spesific page
- sortBy ( optional ) : sort resource by spesific column / key
- sort ( optional ) ( value : asc | desc ) : sort resource ascending or descending
- trucksType[] : filter resource by it's type
- query : filter by resource by it's license number

##### Body :

none

##### Response :

```json
{
  "limit": "integer",
  "current_page": "integer",
  "total_page": "integer",
	"data" : [
    {
      "id": "integer",
      "license_number": "string",
      "license_type": "string",
      "truck_type": "string",
      "production_year": "integer",
      "stnk_url": "string",
      "kir_url": "string",
      "status": "string"
    }
  ]
}
```

#### GET /trucks/:id Get single trucks resource

##### Parameters:

none

##### Body:

none

##### Response

```json
{
  "id": "integer",
  "license_number": "string",
  "license_type": "string",
  "truck_type": "string",
  "production_year": "integer",
  "stnk_url": "string",
  "kir_url": "string",
  "status": "string
}
```

#### POST /trucks/ Create trucks resource

##### Parameters:

none

##### Body:

```json
{
	"license_number": "string",
  "license_type": "string",
  "truck_type": "string",
  "production_year": "integer",
  "stnk_url": "string",
  "kir_url": "string",
  "status": "string"
}
```

##### Response:

```json
{
  "id": "integer",
  "license_number": "string",
  "license_type": "string",
  "truck_type": "string",
  "production_year": "integer",
  "stnk_url": "string",
  "kir_url": "string",
  "status": "string"
}
```

#### PUT /trucks/:id Update trucks resource

##### Parameters:

none

##### Body:

```json
{
	"license_number": "string",
  "license_type": "string",
  "truck_type": "string",
  "production_year": "integer",
  "stnk_url": "string",
  "kir_url": "string",
  "status": "string"
}
```

##### Response:

```json
{
  "id": "integer",
  "license_number": "string",
  "license_type": "string",
  "truck_type": "string",
  "production_year": "integer",
  "stnk_url": "string",
  "kir_url": "string",
  "status": "string"
}
```

#### DELETE /trucks/:id Delete trucks resource

##### Parameters:

none

##### Body:

none

##### Response:

```json
{
	"message": "string"
}
```

## Drivers

#### GET /drivers - Get all drivers resource

##### Parameters :

- limit ( required ) : limit how many resource show in one page
- page ( required ) : get resource on spesific page
- sortBy ( optional ) : sort resource by spesific column / key
- sort ( optional ) ( value : asc | desc ) : sort resource ascending or descending
- query : filter by resource by it's name

##### Body :

none

##### Response :

```json
{
  "limit": "integer",
  "current_page": "integer",
  "total_page": "integer",
	"data" : [
    {
      "id": "integer",
      "name": "string",
      "phone_number": "string",
      "idcard_url": "string",
      "license_url": "integer",
      "status": "integer"
    }
  ]
}
```

#### GET /drivers/:id - Get single drivers resource

##### Parameters :

none

##### Body :

none

##### Response :

```json
{
  "limit": "integer",
  "current_page": "integer",
  "total_page": "integer",
	"data" : [
    {
      "id": "integer",
      "name": "string",
      "phone_number": "string",
      "idcard_url": "string",
      "license_url": "integer",
      "status": "integer"
    }
  ]
}
```

#### POST /drivers/ Create drivers resource

##### Parameters:

none

##### Body:

```json
{
	"name": "string",
  "phone_number": "string",
  "idcard_url": "string",
  "license_url": "integer",
  "status": "integer"
}
```

##### Response:

```json
{
  "id": "integer",
  "name": "string",
  "phone_number": "string",
  "idcard_url": "string",
  "license_url": "integer",
  "status": "integer"
}
```

#### PUT /drivers/:id Update drivers resource

##### Parameters:

none

##### Body:

```json
{
	"name": "string",
  "phone_number": "string",
  "idcard_url": "string",
  "license_url": "integer",
  "status": "integer"
}
```

##### Response:

```json
{
  "id": "integer",
  "name": "string",
  "phone_number": "string",
  "idcard_url": "string",
  "license_url": "integer",
  "status": "integer"
}
```

#### DELETE /drivers/:id Delete drivers resource

##### Parameters:

none

##### Body:

none

##### Response:

```json
{
	"message": "string"
}
```
