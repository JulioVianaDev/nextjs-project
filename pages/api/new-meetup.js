import { MongoClient } from "mongodb";


async function handler(req,res){
  // console.log(req.body);
  if (req.method === 'POST') {
    const data = req.body;
    console.log("iniciando conexao");
    const client = await MongoClient.connect(
      'mongodb+srv://wsl:wsl@react.1fwaoej.mongodb.net/meetups?retryWrites=true&w=majority'
      );
    console.log("iniciando conexao");

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;