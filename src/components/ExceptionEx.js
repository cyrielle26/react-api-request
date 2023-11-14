export const ExceptionEx = () => {
    try {
        //insert exception code
        value;
        console.log("덧샘: " + (1 + 1));
    } catch (error) {
        console.log("error");
    } finally {
        console.log("exception를 유모를 따지 않고 get activate anyway")
    }


    return <div>
         exception
    </div>
}