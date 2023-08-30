using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cripto_divisas.Migrations
{
    /// <inheritdoc />
    public partial class _10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Vector",
                table: "Usuario",
                newName: "salAlmacenada");

            migrationBuilder.RenameColumn(
                name: "Key",
                table: "Usuario",
                newName: "hashAlmacenado");

            migrationBuilder.AlterColumn<string>(
                name: "contraseña",
                table: "Usuario",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "salAlmacenada",
                table: "Usuario",
                newName: "Vector");

            migrationBuilder.RenameColumn(
                name: "hashAlmacenado",
                table: "Usuario",
                newName: "Key");

            migrationBuilder.AlterColumn<byte[]>(
                name: "contraseña",
                table: "Usuario",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0],
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
