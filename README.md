# Javascript-articles-api
WORK IN PROGRESS\
A simple javascript api made with with NodeJs.

## Functionalities
1. [Create Topics](#create-topics)
2. [Update Topics by id](#update-topics-by-id)
3. [Get Topics by id](#get-topics-by-id)
4. [Get all Topics](#get-all-topics)
5. [Delete Topics by id](#delete-topics-by-id)
6. Fetch all Articles
7. Fetch Article by id
8. Create Articles for Topics


# Topics Route
Here are the api calls for the topic Routes

## Create Topics
`POST /topics/`

### Request Body
```json
{
    "name"  : "Topic Name2",
    "image": "Image ur2l",
    "id": "sample_id2"
}
```
### Response
```json
{
    "message": "Topic has been created",
    "details": {
        "topic_name": "Topic Name2",
        "topic_image": "Image ur2l",
        "topic_id": "sample_id2",
        "_id": "5f45090621a1a535146729bb",
        "get_request": {
            "type": "GET",
            "url": "http://localhost:5050/topics/5f45090621a1a535146729bb"
        }
    }
}
```

## Get all Topics
`GET /topics/`

### Response
```json
{
    "count": 1,
    "topics": [
        {
            "topic_name": "Topic Name2",
            "topic_image": "updated_topic_image",
            "topic_id": "sample_id2",
            "_id": "5f45090621a1a535146729bb",
            "details": {
                "type": "GET",
                "url": "http://localhost:5050/topics/5f45090621a1a535146729bb"
            }
        }
    ]
}
```

## Get Topics by ID
`GET /topics/<id>`

### Response
```json
{
    "_id": "5f45090621a1a535146729bb",
    "topic_name": "Topic Name2",
    "topic_image": "updated_topic_image",
    "topic_id": "sample_id2"
}
```

## Update Topics by ID
`PATCH /topics/<id>`

### Request Body
```json
[
    {
        "keyName" : "topic_image",
        "value" : "updated_topic_image"
    }
]
```

### Response
```json
{
    "message": "Topic Updated",
    "topic_id": "5f45090621a1a535146729bb",
    "details": {
        "type": "GET",
        "url": "http://localhost:5050/topics/5f45090621a1a535146729bb"
    }
}
```

## Delete Topics by ID
`DELETE /topics/<id>`

### Response
```json
{
    "message": "Product Deleted",
    "deleted_product_id": "5f44faac5ad9f23c440b0632"
}
```



# Articles Route
## Create Article for topic
`POST /articles/`

### Params
`topicId`

### Request Body
```json
{
    "title" : "Article Title",  
    "name"  : "Article Name",
    "image" : "Image url",
    "isFeatured" : "True"
}
```

### Response
```json
{
    "message": "Created article for topic ",
    "article-details": {
        "topic-id": "21",
        "article-title": "Article Title",
        "article-name": "Article Name",
        "article-image": "Image url",
        "article-isFeatured": "True"
    }
}
```

