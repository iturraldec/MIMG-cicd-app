
--2022-11-23 15:18
/*USE [RELEASE]
GO

/****** Object:  Table [dbo].[MgtAplicacionCICD]    Script Date: 23/11/2022 15:17:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MgtAplicacionCICD](
	[IdAplicacion] [int] IDENTITY(1,1) NOT NULL,
	[CodAplicacion] [nchar](3) NOT NULL,
	[Descripcion] [nvarchar](50) NOT NULL,
	[NombreCorto] [nvarchar](40) NOT NULL,
	[PdpUsuarioCreacion] [nvarchar](30) NOT NULL,
	[PdpFechaCreacion] [datetime] NOT NULL,
	[PdpUsuarioUltimaModificacion] [nvarchar](30) NOT NULL,
	[PdpFechaUltimaModificacion] [datetime] NOT NULL,
	[PdpEstado] [bit] NOT NULL,
	[PdpUltimaTransaccion] [nvarchar](15) NOT NULL,
	[PdpUltimaPcCliente] [nvarchar](15) NOT NULL,
 CONSTRAINT [PK_MgtAplicacionCICD] PRIMARY KEY CLUSTERED 
(
	[IdAplicacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[MgtAplicacionCICD] ADD  CONSTRAINT [DF_MgtAplicacionCICD_PdpFechaCreacion]  DEFAULT (getdate()) FOR [PdpFechaCreacion]
GO

ALTER TABLE [dbo].[MgtAplicacionCICD] ADD  CONSTRAINT [DF_MgtAplicacionCICD_PdpFechaUltimaModificacion]  DEFAULT (getdate()) FOR [PdpFechaUltimaModificacion]
GO

ALTER TABLE [dbo].[MgtAplicacionCICD] ADD  CONSTRAINT [DF_MgtAplicacionCICD_PdpEstado]  DEFAULT ((1)) FOR [PdpEstado]
GO


*/
--DELETE FROM [RELEASE].[dbo].[MgtAplicacionCICD]

INSERT INTO [RELEASE].[dbo].[MgtAplicacionCICD]
SELECT CodAplicacion
	,Descripcion
	, CASE
		WHEN SUBSTRING(Descripcion, 1, 10) = 'SISTEMA DE' THEN RTRIM(SUBSTRING(Descripcion, 12, LEN(Descripcion)))
		WHEN SUBSTRING(Descripcion, 1, 7) = 'SISTEMA' THEN RTRIM(SUBSTRING(Descripcion, 9, LEN(Descripcion)))
		ELSE RTRIM(Descripcion)
	END
	,'CITURRALDEQ'
	,GETDATE()
	,'CITURRALDEQ'
	,GETDATE()
	,1
	,'INIT'
	,HOST_NAME()
FROM [RELEASE].[dbo].[MgtAplicacion]

