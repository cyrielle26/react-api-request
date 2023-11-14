export const TryCatchEx = () => {

    try {
        // Code that may throw an exception
        throw new Error('Something went wrong');
      } catch (exceptionVar) {
        // Code to handle the exception
        console.log('Caught an exception:', exceptionVar.message);
      } finally {
        // Code that will always run
        console.log('This will always execute, whether an exception occurred or not.');
    }
    
    //console output :
/*     
        Caught an exception: Something went wrong
        TryCatchEx.js:11 This will always execute, whether an exception occurred or not.
        TryCatchEx.js:8 Caught an exception: Something went wrong
        TryCatchEx.js:11 This will always execute, whether an exception occurred or not.
*/
    
    
    return <div>
        <h3>Try...catch</h3>
    </div>
}