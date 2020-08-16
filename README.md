# Javascript-articles-api
WORK IN PROGRESS\
A simple javascript api made with with NodeJs.

## Functionalities
1. [Create Topics](#create-topics)
2. [Update Topics ](#create-article-for-topic)
3. Create Articles for Topics
4. Fetch all Articles
5. Fetch Article by id
6. Fetch Topics by id

## Create Topics
`POST /topics/`

### Request Body
```json
{
    "name"  : "Topic Name",
    "image" : "Image url"
}
```
### Response
```json
{
    "message": "Topic has been created",
    "created-topic-details": {
        "topic-name": "Topic Name",
        "topic-image": "Image url",
        "topic-id": "ab70a6bc-a8cd-4458-9187-5ba8c177407d"
    }
}
```

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

