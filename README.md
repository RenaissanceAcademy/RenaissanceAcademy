
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 

## Running the server
1. `python manage.py makemigrations`
2. `python manage.py runserver`
3. click on the link in the notification popup


## Using the Database
* Create your models
  - write a class in `models.py`
  - run `python manage.py makemigrations`
* Update the admin site
  - in `admin.py` import and register the models you created
    - `admin.site.register(modelClassName)`
  - you can now add records to the database models from the admin site
* Build your views using the models
  - first update your views and urls to handle the appropriate template file
  - pass whatever data you need from your models to your views' render context
  - inline the context into your template
* Viewing your database from command line:
  - `python manage.py dbshell`
  - `.dump`