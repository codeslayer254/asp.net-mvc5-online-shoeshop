CREATE TABLE [dbo].[ShopAdmin] (
    [ShopAdminID]      INT           IDENTITY (1, 1) NOT NULL,
    [LastName]       NVARCHAR (50) NULL,
    [FirstName]      NVARCHAR (50) NULL,
	[Email]      NVARCHAR (256) NULL,
	[Password]      NVARCHAR (256) NULL,
	[Role]      NVARCHAR (50) NULL,
    [DateCreated] DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([ShopAdminID] ASC)
)
