# Try-catch 
<hr>
try = throws an exception<br>
catch = executed code <br>
finally = executed before control flow exits the entire construct<br>

## jsx

try { <br>
  tryStatements<br>
} catch (exceptionVar) {<br>
  catchStatements<br>
} finally {<br>
  finallyStatements<br>
}
<hr>

try {  <br>
   // Code to run  <br>
   [break;]  <br>
} catch ( e ) {  <br>
   // Code to run if an exception occurs<br>
   [break;]  <br>
} finally {  <br>
   // Code that is always executed regardless of an exception occurring  <br>
}  <br>

OR

try {
        // Code that may throw an exception<br>
        throw new Error('Something went wrong');<br>
      } catch (exceptionVar) {<br>
        // Code to handle the exception<br>
        console.log('Caught an exception:', exceptionVar.message);<br>
      } finally {<br>
        // Code that will always run<br>
        console.log('This will always execute, whether an exception occurred or not.');<br>
    }<br>