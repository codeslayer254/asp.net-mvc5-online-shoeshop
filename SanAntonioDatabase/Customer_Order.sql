CREATE TABLE [dbo].[Customer_Order] (
    [Customer_OrderID]      INT           IDENTITY (1, 1) NOT NULL,
	[OrderDate] DATETIME      NULL,
	[OrderStatus]      NVARCHAR (50) NULL,
	[PaymentMode]      NVARCHAR (50) NULL,
	[PaymentStatus]      NVARCHAR (50) NULL,
	[DeliveryStatus]      NVARCHAR (50) NULL,
	[ProductID]     INT NULL,
    [CustomerID]     INT NULL,
    PRIMARY KEY CLUSTERED ([Customer_OrderID] ASC),
	CONSTRAINT [FK_dbo.sanatonio_dbo.Product_ProductID] FOREIGN KEY ([ProductID]) 
        REFERENCES [dbo].[Product] ([ProductID]) ON DELETE CASCADE,
	CONSTRAINT [FK_dbo.sanatonio_dbo.Customer_CustomerID] FOREIGN KEY ([CustomerID]) 
        REFERENCES [dbo].[Customer] ([CustomerID]) ON DELETE CASCADE

)