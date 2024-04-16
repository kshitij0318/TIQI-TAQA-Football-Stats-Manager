import os
import pandas as pd
import mysql.connector

mydb=mysql.connector.connect(host="localhost",user="root",password="",port=3306,database="league_standings")

sql="select *from `95-96`;"
mycursor=mydb.cursor()
mycursor.execute(sql)
myresult=mycursor.fetchall()

df=pd.DataFrame()
for x in myresult:
    df2=pd.DataFrame(list(x)).T
    df = pd.concat([df,df2])

df.to_html('templates/95-96.html')
