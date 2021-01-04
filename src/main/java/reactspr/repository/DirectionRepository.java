package reactspr.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import reactspr.domain.Direction;

/**
 * Spring Data repository for the Famille entity.
 */
@Repository
public interface DirectionRepository extends JpaRepository<Direction, Long> {
}
