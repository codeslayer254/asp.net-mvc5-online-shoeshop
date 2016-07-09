CREATE TABLE [dbo].[Customer] (
    [CustomerID]      INT           IDENTITY (1, 1) NOT NULL,
    [LastName]       NVARCHAR (50) NULL,
    [FirstName]      NVARCHAR (50) NULL,
	[Email]      NVARCHAR (256) NULL,
	[Password]      NVARCHAR (256) NULL,
	[Feedback]      NVARCHAR (256) NULL,
    [DateOfBirth] DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([CustomerID] ASC)
)