module pizza_box::kfc {
    use std::bcs;

    public struct Chicken has store {
        chicken_kg: u16,
        garlic_g: u16,
        milk_ml: u16,
        salt_g: u16,
        pepper_g: u16,
        flour_g: u16,
        cornstarch_g: u16,
        eggs: u16,
    }

    public struct ChickenBox has key, store {
        id: UID,
        chicken: Chicken,
    }

    public struct Flag has key, store {
        id: UID,
        user: address
    }

    const ENotKFCPerfect: u64 = 1;

    #[allow(lint(self_transfer))]
    public fun fry(chicken_kg: u16, garlic_g: u16, milk_ml: u16, salt_g: u16, pepper_g: u16, flour_g: u16, cornstarch_g: u16, eggs: u16, ctx: &mut tx_context::TxContext) {
        let sender = tx_context::sender(ctx);

        let c = Chicken {
            chicken_kg,
            garlic_g,
            milk_ml,
            salt_g,
            pepper_g,
            flour_g,
            cornstarch_g,
            eggs,
        };

        transfer::public_transfer(ChickenBox { id: object::new(ctx), chicken: c }, sender);
    }

    #[allow(lint(self_transfer))]
    public fun get_flag(chickenbox: &ChickenBox, ctx: &mut tx_context::TxContext) {
        // Prefer explicit per-field checks to avoid BCS encoding mismatches.
        // Perfect recipe values:
        // chicken_kg=1, garlic_g=10, milk_ml=300, salt_g=15, pepper_g=5,
        // flour_g=200, cornstarch_g=100, eggs=2
        let c = &chickenbox.chicken;
        let is_perfect = c.chicken_kg == 1u16
            && c.garlic_g == 10u16
            && c.milk_ml == 300u16
            && c.salt_g == 15u16
            && c.pepper_g == 5u16
            && c.flour_g == 200u16
            && c.cornstarch_g == 100u16
            && c.eggs == 2u16;

        assert!(is_perfect, ENotKFCPerfect);

        transfer::public_transfer(Flag {
            id: object::new(ctx),
            user: tx_context::sender(ctx)
        }, tx_context::sender(ctx));
    }
}
