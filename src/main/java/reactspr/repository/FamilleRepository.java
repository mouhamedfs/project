package reactspr.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import reactspr.domain.Famille;

/**
 * Spring Data repository for the Famille entity.
 */
@Repository
public interface FamilleRepository extends JpaRepository<Famille, String> {
}
