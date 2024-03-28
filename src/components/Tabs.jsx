// using slot to make code cleaner
export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
    // custom component
    //const ButtonContainer = buttonsContainer;

    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}