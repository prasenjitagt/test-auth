import mongoose from "mongoose";




export async function dbConnect() {


    try {


        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;



        connection.on('connection', () => {
            console.log('DB connected sucessfully');

        });


        connection.on('error', (error) => {
            console.log('DB connection error, Please check connection:' + error);

            process.exit();

        });

    } catch (error) {

        console.log('Something Went Wrong in Connecting to DB');


        console.log(error);



    }

}