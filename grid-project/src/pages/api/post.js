export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body.signature)
      // Handle the POST request logic here
      res.status(200).json({ message: 'Post received successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }