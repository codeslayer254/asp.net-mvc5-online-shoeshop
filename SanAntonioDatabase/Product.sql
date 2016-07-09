CREATE TABLE [dbo].[Product] (
    [ProductID]      INT           IDENTITY (1, 1) NOT NULL,
    [Name]       NVARCHAR (50) NULL,
	[Category]       NVARCHAR (50) NULL,
	[Brand]       NVARCHAR (50) NULL,
	[imagePath]       NVARCHAR (256) NULL,
    [Sex]      NVARCHAR (50) NULL,
	[Price]        DECIMAL(5, 2) NULL,
    [StockInDate] DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([ProductID] ASC)
)