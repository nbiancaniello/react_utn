function Schedule() {  
   return (
      <div className="col-4 footer-schedule">
         <h3>Horario de Atención</h3>
         <table id="calendar" className="table">
            <thead>
               <tr>
                  <th scope="col">Día</th>
                  <th scope="col">Horario</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">Lunes</th>
                  <td>8:00 a 13:00 / 16:00 a 20:30</td>
               </tr>
               <tr>
                  <th scope="row">Martes</th>
                  <td>8:00 a 13:00 / 16:00 a 20:30</td>
               </tr>
               <tr>
                  <th scope="row">Miércoles</th>
                  <td>8:00 a 13:00 / 16:00 a 20:30</td>
               </tr>
               <tr>
                  <th scope="row">Jueves</th>
                  <td>8:00 a 13:00 / 16:00 a 20:30</td>
               </tr>
               <tr>
                  <th scope="row">Viernes</th>
                  <td>8:00 a 13:00 / 16:00 a 20:30</td>
               </tr>
               <tr>
                  <th scope="row">Sábado</th>
                  <td>8:00 a 13:00 / 16:00 a 20:30</td>
               </tr>
               <tr>
                  <th scope="row">Domingo</th>
                  <td>8:00 a 13:00</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default Schedule;