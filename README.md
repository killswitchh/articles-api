# Javascript-articles-api
WORK IN PROGRESS\
A simple javascript api made with with NodeJs.

## Functionalities
1. [Create Topics](#create-topics)
2. [Get all Topics](#get-all-topics)
3. [Get Topics by id](#get-topics-by-id)
4. [Update Topics by id](#update-topics-by-id)
5. [Delete Topics by id](#delete-topics-by-id)
6. [Create Articles for Topics](#create-article-for-topic)
7. [Get all Articles](#get-all-articles)
8. [Get all Articles for a topic](#get-all-articles-for-a-Topic)
9. [Get Article by ID](#get-article-by-id)
10. [Update Article by ID](#update-article-by-id)
11. [Delete Article by ID](#delete-article-by-id)




# Topics Route
Here are the api calls for the topics Route.

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
    "_id": "<id>",
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
    "topic_id": "<id>",
    "details": {
        "type": "GET",
        "url": "http://localhost:5050/topics/<id>"
    }
}
```

## Delete Topics by ID
`DELETE /topics/<id>`

### Response
```json
{
    "message": "Product Deleted",
    "deleted_product_id": "<id>"
}
```



# Articles Route
Here are the api calls for the articles Route.

## Create Article for Topic
`POST /articles/`

### Request Body
```json
{
    "id" : "253",
    "topicId": "<id>",
    "title" : "Article Title",
    "image" : "Image url",
    "content" : "Article content",
    "isFeatured" : "true"
}
```

### Response
```json
{
    "message": "Article has been created",
    "details": {
        "_id": "5f4a48976418f93b1c73316d",
        "topic": "<id>",
        "article_id": 253,
        "article_title": "Article Title",
        "article_image": "Image url",
        "article_content": "Article content",
        "is_featured": true,
        "get_request": {
            "type": "GET",
            "url": "http://localhost:5050/articles/5f4a48976418f93b1c73316d"
        }
    }
}
```


## Get all Articles
`GET /articles/`

### Response
```json
{
    "count": 1,
    "articles": [
        {
            "_id": "5f4a46192ffa2b2d7c9a589c",
            "topic": "5f45090621a1a535146729bb",
            "id": 253,
            "title": "Article Title",
            "image": "Image url",
            "content": "Article content",
            "request": {
                "type": "GET",
                "url": "http://localhost:5050/articles/5f4a46192ffa2b2d7c9a589c"
            }
        }
    ]
}
```

## Get all Articles for a Topic
`GET /articles/allarticles/<topic_id>`

### Response
```json
{
    "count": 1,
    "articles": [
        {
            "_id": "<article_id>",
            "topic": "<topic_id>",
            "id": 253,
            "title": "Article Title",
            "image": "Image url",
            "content": "Article content",
            "request": {
                "type": "GET",
                "url": "http://localhost:5050/articles/<article_id>"
            }
        }
    ]
}
```


## Get Article by ID
`GET /articles/<id>`

### Response
```json
{
    "_id": "<id>",
    "topic": "5f45090621a1a535146729bb",
    "article_id": 253,
    "article_title": "Article Title",
    "article_image": "Image url",
    "article_content": "Article content",
    "is_featured": true
}
```


## Update Article by ID
`PATCH /articles/<id>`

### Request Body
```json
[
    {
        "keyName" : "title",
        "value" : "updated_title"
    }
]
```

### Response
```json
{
    "message": "Article Updated",
    "article_id": "<id>",
    "details": {
        "type": "GET",
        "url": "http://localhost:5050/articles/<id>"
    }
}
```

## Delete Article by ID
`DELETE /articles/<id>`

### Response
```json
{
    "message": "Article Deleted",
    "deleted_article_id": "<id>"
}
```