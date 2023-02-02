import { FunctionComponent } from "react"
import EmojiCard, {EmojiCardProps} from "./emojiCard"

export interface EmojiListProps {
    emojis: EmojiCardProps[]
}

const List: FunctionComponent<EmojiListProps> = ({emojis}) => {
    return (
        <>
            <h2 className='text-xl mb-5 font-bold text-gray-600'>Todos los emojis</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {
                    emojis.map((emoji, index) => {
                        return <EmojiCard key={index} {...emoji} />
                    })
                }
            </div>
        </>
    )
}
export default List;