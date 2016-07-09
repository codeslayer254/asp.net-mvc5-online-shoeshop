CREATE TABLE [dbo].[Address] (
    [AddressID]      INT           IDENTITY (1, 1) NOT NULL,
    [address]       NVARCHAR (50) NULL,
	[City]       NVARCHAR (50) NULL,
    [State]      NVARCHAR (50) NULL,
	[Postcode]      NVARCHAR (50) NULL,
	[Country]      NVARCHAR (256) NULL,
    [CustomerID]     INT NOT NULL,
    PRIMARY KEY CLUSTERED ([AddressID] ASC)
)