/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

MERGE INTO Customer AS Target
USING (VALUES 
        (1, 'Tibbetts', 'Donnie',  'samora77@gmail.com', 'samo2016', 'Feeedddback', '2013-09-01'), 
		(2, 'Ruth', 'Knight',  'stubbornr@yahoo.com', 'ruth2016', 'Feeeddback', '2013-09-01')
)
AS Source (CustomerID, LastName, FirstName, Email, Password, Feedback, DateOfBirth)
ON Target.CustomerID = Source.CustomerID
WHEN NOT MATCHED BY TARGET THEN
INSERT (FirstName, LastName,Email, Password, Feedback, DateOfBirth)
VALUES (FirstName, LastName,Email, Password, Feedback, DateOfBirth);

MERGE INTO [Product] AS Target
USING (VALUES 
        (1, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/13.jpg', 'F', 89.9, '2013-09-01'), 
		(2, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/14.jpg', 'F', 39.9, '2013-09-01'),
		(3, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/18.jpg', 'F', 39.9, '2013-09-01'),
		(4, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/12.jpg', 'F', 39.9, '2013-09-01'),
		(5, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/20.jpg', 'F', 39.9, '2013-09-01'),
		(6, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/21.jpg', 'F', 39.9, '2013-09-01'),
		(7, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/22.jpg', 'F', 39.9, '2013-09-01'),
		(8, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/12.jpg', 'F', 39.9, '2013-09-01'),
		(9, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/17.jpg', 'F', 39.9, '2013-09-01'),
		(10, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/15.jpg', 'F', 67.9, '2013-09-01'),
		(11, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/19.jpg', 'F', 44.99, '2013-09-01'),
		(12, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/12.jpg', 'F', 39.9, '2013-09-01'),
		(13, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/22.jpg', 'F', 43.9, '2013-09-01'),
		(14, 'Gucci Handbag', 'Handbags',  'Gucci', 'img/product/fashion/21.jpg', 'F', 66.9, '2013-09-01')
		
)
AS Source (ProductID, Name, Category, Brand, imagePath, Sex, Price, StockInDate)
ON Target.ProductID = Source.ProductID
WHEN NOT MATCHED BY TARGET THEN
INSERT (Name, Category, Brand, imagePath, Sex, Price, StockInDate)
VALUES (Name, Category, Brand, imagePath, Sex, Price, StockInDate);