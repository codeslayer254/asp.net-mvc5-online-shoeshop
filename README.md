# asp.net-mvc5-online-shoeshop
An online shoes &amp; handbag shopping  web application built with ASP.NET Core MVC, which implements the model–view–controller pattern.

>### i. Member Registration
>New customers are able to register as members to perform tasks which are permitted
>to members only.
>### ii. Administrative Functions (Website Management)
>The website administrators are allowed to perform administrative tasks like product
>management, order, payment and delivery processing, generate various types of
>reports and etc.
>
>### iii. Product Catalog
>Customers are able to browse the products offered by the company. The product
>listing is generated from database dynamically. The detail of the products should be
>displayed upon clicking. A minimum of FIVE (5) different products is required.
>
>### iv. Shopping Cart
>Customers can view a product catalog and create a shopping cart for storing
>merchandise. Customers can check-out anytime during shopping and proceed to
>payment processing.
>
>### v. Payment Support
>There are many Payment options available. Customers commonly use credit cards to
>make payments. Customers are allowed to download the transaction details as a
>document and print the transaction document.
>
>### vi. Product Delivery
>Once a payment has been accepted the product(s) ordered will be delivered to
>designated address.

>### vii. Customer Feedback
>Customers who are seeking for supports can leave their enquiries, feedbacks &
>comments through the website. The website administrator will take action and
>response respectively by checking the reports generated from administration pages.


### Software Requirements
**ASP.NET:** Microsoft Visual Studio >2012

**Server:** Microsoft SQL Server 2014

### Getting the project clone
The project uses GIT versioning system,  use the follwing git command to get a clone of the project
to your local repository

```sh
git clone https://github.com/ramayall/asp.net-mvc5-online-shoeshop.git
```


### Installation & Set Up Guide
**Installtion Steps:**

1. Download/clone the project to your local repository directory.

2. Launch Visual Studio IDE and import the project as an existing Visual Studio project.

3. Add required libraries mysql-connector-java-5.1.18-bin.jar and rs2xml.jar to your project. The 2 jar files are included 
inside the lib folder.


### Database Configuration
1. Download and install using this [guide](http://www.sqlshack.com/sql-server-management-studio-step-step-installation-guide/). 
2. Launch SQL Server Management Studio and attach the database named SanAntonioData.mdf inside the App_Data folder.
3. In Web.config, configure a custom database connection string to your SQL Server database as below

```sh
 <connectionStrings>
    <add name="DefaultConnection" providerName="System.Data.SqlClient" connectionString="Data Source=.\SQLEXPRESS; 
	AttachDbFileName=|DataDirectory|\SanAntonioData.mdf;  Integrated Security=True;User Instance=True; MultipleActiveResultSets=True" />
  </connectionStrings>
```

### Version
1.1.0

### Todos
 - Write Tests
 - Fix Authentication & Registration 
 - Rethink Github Save
 - Add Code Comments
 - Add Night Mode

License
----

MIT

**Free Software, Hell Yeah!**
