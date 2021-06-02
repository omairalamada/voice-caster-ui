import { uid } from "quasar";

export async function addCollege(context, payload) {
    const college = {
        id: uid(),
        client: payload.client,
        status: payload.status
    };
    if (college.client != '' && college.status != '') {
        context.commit('addCollege', college);
        //console.log(client);
        alert('Successfully Added!');
    } else {
        alert('ERROR CANT BE EMPTY!');
    }
}

export async function getAllClients() {
    
}