import { Link as RouterLink} from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage= () => {
  return (
    <AuthLayout title="REGISTRO">
          <form>
          <Grid container>
            
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="tu nombre"
                fullWidth
              >

              </TextField>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="correo" 
                type="email" 
                placeholder="correo@gmail.com"
                fullWidth
              >

              </TextField>
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="contraseña" 
                type="password" 
                placeholder="password"
                fullWidth
              >

              </TextField>
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt: 2}}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>
              
            </Grid>


          </Grid>
        </form>
    </AuthLayout>
        
        
      
  )
}
