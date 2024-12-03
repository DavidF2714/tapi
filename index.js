const express = require('express');
const app = express();

app.post('/nono/fechas', async (req, res) => {
    const { diaCorte, fechaLimite } = req.query;

    try {
        // Función para formatear las fechas
        const formatearFecha = (fecha) => {
            const meses = [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
            ];

            const fechaObj = new Date(fecha);
            if (isNaN(fechaObj)) throw new Error('Fecha inválida');

            const dia = fechaObj.getDate();
            const mes = meses[fechaObj.getMonth()];

            return `${dia} de ${mes}`;
        };

        const fechaCorteFormateada = formatearFecha(diaCorte);
        const fechaLimiteFormateada = formatearFecha(fechaLimite);

        res.json({
            fechaCorte: fechaCorteFormateada,
            fechaLimite: fechaLimiteFormateada,
        });
    } catch (error) {
        res.status(400).json({ error: 'Formato de fecha inválido o error interno' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
