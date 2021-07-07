import {api} from '../api/api'
import swal from 'sweetalert2'
import { useContext } from 'react'
import { globalContext } from '../api/context/globalContext'




export const deleteUser = ( id:number)=>{
  const {setRefreshLista, refreshLista} = useContext(globalContext)
 
  swal.fire({
    title: `Deseja realmente excluir este usuário ?`,
    showDenyButton: true,
    confirmButtonText: `Confirmar`,
    denyButtonText: `Cancelar`,
  }).then((result) => {
   
    if (result.isConfirmed) {
      api.delete(`users/${id}`).then(()=>swal.fire('Usuário excluído com sucesso!', '', 'success').then(()=>setRefreshLista(!refreshLista)))
      
    } else if (result.isDenied) {
      swal.fire('Operação cancelada!', '', 'info')
    }
  })

}