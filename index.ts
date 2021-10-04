import { MongoClient, Db, ObjectId } from "mongodb";
import { Command } from "commander";
import CliTable3, { TableConstructorOptions } from "cli-table3";

interface Producto {
    nombre: String,
    precio: Number
}

interface Empleado {
    nombre: String
    usuario: String
    password: String
    cargo: String
}

interface Mesero extends Empleado {
    turno: String
}

interface Gerente extends Empleado {
    autorizacion: boolean
}

interface Orden {
    cliente: String,
    mesero: String,
    productosAdquiridos: Producto[],
    fechaOrden: String
    horaOrden: String
    precioTotalOrden: Number
    estado: boolean
}


async function getDatabase(): Promise<Db> {
    // Connection url
    const url = "mongodb://localhost:27017";
    // Database Name
    const dbName = "topicosweb";
    // Connect using MongoClient
    const mongoClient = new MongoClient(url);
    try {
      const client = await mongoClient.connect();
      const db = client.db(dbName);
      return db;
      // mongoClient.close();
    } catch (err: any) {
      console.log(err);
      process.exit(1);
    }
  }

  


  