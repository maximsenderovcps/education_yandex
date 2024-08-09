export interface ProfileBody {
    email: string,
    name: string,
    password: string
}

export interface ProfileDto {
    success: true,
    user: {
        email: string,
        name: string
    }
}