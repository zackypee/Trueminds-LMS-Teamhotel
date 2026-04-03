

const inputValidation = (formData) => {

    const newErrors = {};


    // NAME

    if("name" in formData){
        if (!formData.name || !formData.name.trim()) {
        newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
        }
    }

    // EMAIL
    if("email" in formData){
        const email = formData.email?.trim();
        //const emailRegex = /^(?=.*[0-9])[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
        newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
        newErrors.email = "Enter a valid email";
        }
    }

    // PASSWORD

    if("password" in formData){
    const password = formData.password;

    if (!password) {
    newErrors.password = "Password is required";
    } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
    newErrors.password = "Must include at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
    newErrors.password = "Must include at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
    newErrors.password = "Must include at least one number";
    }
    }


    return newErrors;
    
}

export default inputValidation;