import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import '../Perdidos/Perdidos.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export function Checkboxes() {
    return (
      <div>
        <Checkbox  {...label}  /> Mais Recentes
        <Checkbox {...label} /> Maior Recompensa
      </div>
    );
  };
const Img = styled('img')({
  margin:'auto',
  display: 'flex',
});

export default function Complex() {
  return (
    <div className='Card'>
        <div className='escolhaBtnChek'>
         <div className="btn-AchadoPerdido">                
              <button className="btnAchado">Achei</button>
              <button className="btnPerdido">Perdi</button>
              </div> 
              <div className='cheked'>
              <Checkboxes/>
              </div>
              <h2 className='title'>Perdido</h2>
              </div>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow:1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          padding:1,
          display:'flex'   
      }}>
     
      <Grid container spacing={2}className='divisor1'>
               <Grid item >
          <ButtonBase sx={{ width: 128, height: 110 }}>
            <Img alt="complex" src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/largadao/catalog/porta-documentos-ziper-novo.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={3}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <h2>Recompensa</h2>
              </Typography>
              <Typography variant="body2" gutterBottom>
              <h5>Hoje perdi minha <strong>Carteira com Documentos</strong>, 
              na ilha de Luanda, equanto saia do Club Naval, e ofereço 
      <br/> 20,000.00 akz para quem achar por favor entre em contato. </h5>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <h5>whatsap-900023745</h5>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
               <button className='btn'>Contactar</button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            <h4>20,000.00 akz</h4>
            </Typography>
          </Grid>
        </Grid> 
      </Grid>
<div className='divisor' > <p>  -------- </p> </div>
    <Grid container spacing={2}  className='divisor2'>
    <Grid item>
<ButtonBase sx={{ width: 128, height: 128 }}>
 <Img alt="complex" src="https://recosi.net/wp-content/uploads/2017/11/Iphone-6-Silver-1.jpg" />
</ButtonBase>
</Grid>
<Grid item xs={12} sm container>
<Grid item xs container direction="column" spacing={3}>
 <Grid item xs>
   <Typography gutterBottom variant="subtitle1" component="div">
        <h2>Recompensa</h2>
   </Typography>
   <Typography variant="body2" gutterBottom>
   <h4>Ontem Perdi Meu <strong>Iphone 6</strong>, dor cinza dentro do Kibado da Mutamba e ofereço 
      <br/> 50,000.00 akz para quem achar por favor entre em contato. </h4>
   </Typography>
   <Typography variant="body2" color="text.secondary">
   <h5>whatsap-921233454</h5>
   </Typography>
 </Grid>
 <Grid item>
   <Typography sx={{ cursor: 'pointer' }} variant="body2">
    <button className='btn'>Contactar</button>
   </Typography>
 </Grid>
</Grid>
<Grid item>
 <Typography variant="subtitle1" component="div">
 <h4>50,000.00 akz</h4>
 </Typography>
</Grid>
</Grid> 
</Grid>
</Paper> 
<div> <h2 className='MoreW'> <button>Ver mais</button> </h2></div>
</div>
  );
}